import { useState, useEffect } from 'react';
import { useSiteSettings, useUpdateSiteSetting } from '@/hooks/useSiteSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Save, Loader2, MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const settingIcons: Record<string, LucideIcon> = {
  whatsapp_number: MessageCircle,
  contact_email: Mail,
  contact_phone: Phone,
  company_address: MapPin,
  facebook_url: Facebook,
  instagram_url: Instagram,
  linkedin_url: Linkedin,
  twitter_url: Twitter,
};

const settingLabels: Record<string, string> = {
  whatsapp_number: 'WhatsApp Number',
  contact_email: 'Contact Email',
  contact_phone: 'Contact Phone',
  company_address: 'Company Address',
  facebook_url: 'Facebook URL',
  instagram_url: 'Instagram URL',
  linkedin_url: 'LinkedIn URL',
  twitter_url: 'Twitter/X URL',
};

export default function AdminSettings() {
  const { data: settings, isLoading } = useSiteSettings();
  const updateMutation = useUpdateSiteSetting();
  const { toast } = useToast();

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (settings) {
      const data: Record<string, string> = {};
      settings.forEach((s) => {
        data[s.key] = s.value || '';
      });
      setFormData(data);
    }
  }, [settings]);

  const handleSave = async (key: string) => {
    setSaving((prev) => ({ ...prev, [key]: true }));

    try {
      await updateMutation.mutateAsync({ key, value: formData[key] });
      toast({
        title: 'Setting updated',
        description: `${settingLabels[key] || key} has been updated successfully.`,
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update setting.',
        variant: 'destructive',
      });
    }

    setSaving((prev) => ({ ...prev, [key]: false }));
  };

  const handleSaveAll = async () => {
    const keys = Object.keys(formData);
    
    for (const key of keys) {
      setSaving((prev) => ({ ...prev, [key]: true }));
      try {
        await updateMutation.mutateAsync({ key, value: formData[key] });
      } catch (error) {
        console.error(`Failed to save ${key}:`, error);
      }
      setSaving((prev) => ({ ...prev, [key]: false }));
    }

    toast({
      title: 'All settings saved',
      description: 'Your site settings have been updated successfully.',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const contactSettings = settings?.filter((s) =>
    ['whatsapp_number', 'contact_email', 'contact_phone', 'company_address'].includes(s.key)
  );

  const socialSettings = settings?.filter((s) =>
    ['facebook_url', 'instagram_url', 'linkedin_url', 'twitter_url'].includes(s.key)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Site Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your website configuration
          </p>
        </div>
        <Button onClick={handleSaveAll}>
          <Save className="mr-2 h-4 w-4" />
          Save All
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your business contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactSettings?.map((setting) => {
                const Icon = settingIcons[setting.key] || Mail;
                return (
                  <div key={setting.key} className="space-y-2">
                    <Label htmlFor={setting.key} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      {settingLabels[setting.key] || setting.key}
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id={setting.key}
                        value={formData[setting.key] || ''}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [setting.key]: e.target.value }))
                        }
                        placeholder={setting.description || ''}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSave(setting.key)}
                        disabled={saving[setting.key]}
                      >
                        {saving[setting.key] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>
                Connect your social media profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialSettings?.map((setting) => {
                const Icon = settingIcons[setting.key] || Mail;
                return (
                  <div key={setting.key} className="space-y-2">
                    <Label htmlFor={setting.key} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      {settingLabels[setting.key] || setting.key}
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id={setting.key}
                        value={formData[setting.key] || ''}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [setting.key]: e.target.value }))
                        }
                        placeholder={setting.description || ''}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSave(setting.key)}
                        disabled={saving[setting.key]}
                      >
                        {saving[setting.key] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
