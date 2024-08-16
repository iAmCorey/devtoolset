'use client';

import React, { useState } from 'react';
import {
    LightningBoltIcon,
    DotsHorizontalIcon,
    GlobeIcon
} from "@radix-ui/react-icons"
import { SearchIcon } from 'lucide-react';
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export function Search({ className }: { className?: string }) {
    const [search, setSearch] = useState('');

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Command className={cn("rounded-lg border shadow-md", className)}>
                <CommandInput placeholder="Search tools by name / tags..." value={search} onValueChange={setSearch} />
                <CommandList>
                    <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => window.location.href = '/tools/ai'}>
                            <LightningBoltIcon className="mr-2 h-4 w-4" />
                            <span>AI</span>
                        </CommandItem>
                        <CommandItem onSelect={() => window.location.href = '/tools/seo'}>
                            <GlobeIcon className="mr-2 h-4 w-4" />
                            <span>SEO</span>
                        </CommandItem>
                        <CommandItem disabled>
                            <DotsHorizontalIcon className="mr-2 h-4 w-4" />
                            <span>More</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </Command>
            { search && 
            <Button variant="outline" className='mt-6' onClick={() => window.location.href = `/tools/${encodeURIComponent(search)}`}>
                <SearchIcon size={16} className='mr-2 opacity-80' />搜索
            </Button> }
        </div>
    )
}
