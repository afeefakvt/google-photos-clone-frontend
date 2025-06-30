"use client"
import { useSearch } from "@/contexts/SearchContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PhotoFilters({ onApply }: { onApply: (filters: any) => void }) {
  const { search } = useSearch()
  const [minWidth, setMinWidth] = useState("")
  const [maxWidth, setMaxWidth] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  const handleSubmit = () => {
    onApply({
      search,
      minWidth,
      maxWidth,
      dateFrom,
      dateTo,
    })
  }

  const handleClear = () => {
    setMinWidth("")
    setMaxWidth("")
    setDateFrom("")
    setDateTo("")
    onApply({ search: "" })
  }

  return (
    <div className="bg-[#303134] p-4 rounded-lg mb-6 flex flex-wrap gap-4">
      <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} placeholder="Date From" className="w-[160px]" />
      <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} placeholder="Date To" className="w-[160px]" />
      <Input type="number" value={minWidth} onChange={(e) => setMinWidth(e.target.value)} placeholder="Min Width" className="w-[130px]" />
      <Input type="number" value={maxWidth} onChange={(e) => setMaxWidth(e.target.value)} placeholder="Max Width" className="w-[130px]" />
      <Button onClick={handleSubmit} className="bg-blue-600">Apply</Button>
      <Button onClick={handleClear} variant="ghost" className="text-white border border-gray-500">Clear</Button>
    </div>
  )
}
