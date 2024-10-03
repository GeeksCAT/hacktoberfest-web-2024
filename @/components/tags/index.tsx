export interface TagsProps {
  sala: string;
  tags: string[];
}

const Tags = ({ sala, tags }: TagsProps) => {
  return (
    <div className="flex gap-3.5 pt-4 flex-wrap">
      <div className="flex h-[25px] min-w-[88px] items-center justify-center rounded-lg bg-[#65E0B8] p-1 text-xs text-neutral-900 ">
        <p>{sala}</p>
      </div>
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex h-[25px] min-w-[88px] items-center justify-center rounded-lg bg-[#FFE999] p-1 text-xs text-neutral-900"
        >
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tags;