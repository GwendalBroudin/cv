import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
 
export default getRequestConfig(async ({locale}) => { 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});