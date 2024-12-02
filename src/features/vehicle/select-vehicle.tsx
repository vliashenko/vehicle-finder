'use client';

import Button from '@/shared/ui/button';
import Select from '@/shared/ui/select';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useMemo, useState } from 'react';

export default function SelectVehicleMaker({
  options,
}: {
  options: { id: string; title: string }[];
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
    <div>
      <form onSubmit={handleSubmit} className='flex flex-row items-center justify-center gap-5'>
        <Select options={options} label='maker' value={selectedMaker} setValue={setSelectedMaker} />
        <Select options={options} label='year' value={selectedYear} setValue={setSelectedYear} />
        <Button onClick={() => handleSubmit} disabled={disabled} type='submit' title='Search' />
      </form>
    </div>
  );
}
