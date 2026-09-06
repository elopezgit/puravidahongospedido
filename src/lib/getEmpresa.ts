import { supabase } from './supabase';

export async function getEmpresaId(slug: string): Promise<string | null> {
  const data = await getEmpresaData(slug);
  return data?.id || null;
}

export async function getEmpresaData(slug: string): Promise<any | null> {
  if (!slug) throw new Error('Se requiere el slug de la empresa');
  const { data, error } = await supabase
    .from('empresas')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching empresa:', error);
    throw new Error(error.message);
  }

  return data;
}
