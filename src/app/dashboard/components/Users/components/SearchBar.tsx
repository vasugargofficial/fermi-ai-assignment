import React from "react";
import { Input } from "@/components/ui/Input/Input";

export const SearchBar: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => (
  <div>
    <Input label="Search" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);