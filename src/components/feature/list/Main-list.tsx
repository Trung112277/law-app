import { useDetention } from '@/context/detention-context';
import { ListItem } from "./List-item";

export function MainList({ query }: { query?: string }) {
  const { cases, updateCase, addCase, removeCase } = useDetention();
  const filteredCases = query && query.trim() !== ''
    ? cases.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    : cases;

  return (
    <div>
      {filteredCases.length === 0 ? (
        <div className="text-center text-gray-500 py-8 text-lg font-semibold">Không có vụ án nào</div>
      ) : (
        <ul>
          {filteredCases.map((item, idx) => (
            <ListItem
              key={idx}
              data={item}
              onChange={value => updateCase(cases.indexOf(item), value)}
              onRemove={() => removeCase(cases.indexOf(item))}
            />
          ))}
        </ul>
      )}
    </div>
  );
}