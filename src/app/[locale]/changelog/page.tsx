import React from 'react'; // 确保导入 React
import { ChangelogSection } from '@/components/ChangelogSection';
import { getChangelog } from "@/lib/data";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {getTranslations, getLocale} from 'next-intl/server';
import {useLocale} from 'next-intl';

export async function generateMetadata() {
    const t = await getTranslations('changelog');
    return {
        title: t('meta_title'),
        description: t('meta_description'),
    }
}

export default async function ChangelogPage() {
    const changelogs = getChangelog();
    const currentLocale = await getLocale();
    console.log(currentLocale)
    const t = await getTranslations('changelog');

    console.log(changelogs[currentLocale])
    return (
        <div className="container mx-auto py-12 space-y-16 min-h-screen">
            <section className="text-center space-y-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{t('changelogBtn')}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
                    <span className="">{t('h1')}</span>
                </h1>
                <h2 className="mx-auto max-w-[700px] opacity-60  md:text-xl">{t('h2')}</h2>
            </section>
            <div className="flex flex-col items-center justify-center w-full">
            <ChangelogSection
                items={changelogs[currentLocale]}
                className="w-full lg:w-1/2 px-6"
            />
            </div>

        </div>
    );
}
