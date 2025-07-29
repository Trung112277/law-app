import { AddButton } from "../button/Add-button";
import { SearchName } from "../search/Search-name";

export function ToolBar({ onSearch, value }: { onSearch: (v: string) => void; value: string }) {
  return <div className="flex items-center gap-5">
    <AddButton />
    <SearchName value={value} onChange={onSearch} />
  </div>;
}
