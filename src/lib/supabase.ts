import { supabase } from '@/supabase/supabaseClient';

/**
 * Get public URL of a file stored in a public Supabase bucket.
 * @param {string} bucketName - The name of the Supabase bucket.
 * @param {string} folderPath - The folder path inside the bucket (optional).
 * @param {string} fileName - The name of the file.
 * @returns {string | null} - Public URL of the file, or null if an error occurs.
 */
export const getFilePublicUrl = (bucketName: string, fileName: string, folderPath: string = ''): string | null => {
  const fullPath = folderPath ? `${folderPath}/${fileName}` : fileName;
  const { data } = supabase.storage.from(bucketName).getPublicUrl(fullPath);
  return data.publicUrl;
}
