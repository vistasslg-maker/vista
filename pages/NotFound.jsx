import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { Compass, Phone } from 'lucide-react';
import { getPrimaryPhone, formatTelHref } from '../data';

export default function NotFound() {
  const primaryPhone = getPrimaryPhone();

  return (
    <BaseLayout title="Page Not Found">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-forest-soft text-forest-mid flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <span className="section-label mb-2">404 ERROR</span>
        <Heading level="1" className="mb-4">
          The Trail Ends Here
        </Heading>

        <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has moved. Let's guide you back to our mountain homestay.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md" to="/">
            Return to Home
          </Button>

          <Button
            variant="secondary"
            size="md"
            href={formatTelHref(primaryPhone)}
            icon={Phone}
          >
            Call ({primaryPhone})
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
}
