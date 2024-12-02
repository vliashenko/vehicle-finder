'use client';

import Button from '@/shared/ui/button';
import Select from '@/shared/ui/select';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useMemo, useState } from 'react';

export default function SelectVehicleForm({
  makerOptions,
  yearOptions,
}: {
  makerOptions: { id: string; title: string }[];
  yearOptions: { id: string; title: string }[];
}) {
  const router = useRouter();

  const [selectedMaker, setSelectedMaker] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const disabled = useMemo(
    () => !selectedMaker.length || !selectedYear.length,
    [selectedMaker, selectedYear],
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/result/${selectedMaker}/${selectedYear}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-screen flex-wrap items-center justify-center gap-2 px-10'
    >
      <div className='w-[120px]'>
        <Select
          options={makerOptions}
          label='maker'
          value={selectedMaker}
          setValue={setSelectedMaker}
        />
      </div>
      <div className='w-[120px]'>
        <Select
          options={yearOptions}
          label='year'
          value={selectedYear}
          setValue={setSelectedYear}
        />
      </div>
      <Button onClick={() => handleSubmit} disabled={disabled} type='submit' title='Search' />
    </form>
  );
}
