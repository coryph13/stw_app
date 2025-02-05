import { baseApiUrl } from "@/config";
import { getLocale } from "next-intl/server";
import { ISearchList } from '@/types/search';

export async function search(
    queryString: string
  ): Promise<ISearchList> {
    const url = new URL(`search?${queryString}`, baseApiUrl);
    const locale = await getLocale();
    const response = await fetch(
      url.href,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Language": locale
        },
        next: {
          revalidate: 3600,
          tags: ['product'],
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit the data. Please try again.')
    }

    const data: ISearch = await response.json();

    return data;
  }
