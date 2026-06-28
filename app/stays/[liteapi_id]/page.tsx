import { notFound, redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getHotelProfileHref } from '@/lib/hotel-slug';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    liteapi_id: string;
  }>;
}

interface LegacyStayRoute {
  name: string;
  city: string | null;
}

export default async function LegacyStayRoutePage({ params }: PageProps) {
  const { liteapi_id: liteapiId } = await params;

  const { data, error } = await supabase
    .from('hotels')
    .select('name, city')
    .eq('liteapi_id', liteapiId)
    .eq('is_published', true)
    .maybeSingle();

  if (error) {
    console.error('[legacy-stay-route] Supabase error:', error.message);
    notFound();
  }

  const stay = data as LegacyStayRoute | null;

  if (!stay) {
    notFound();
  }

  redirect(getHotelProfileHref(stay));
}
