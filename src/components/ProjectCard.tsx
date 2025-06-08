import Card from '@/components/Card';
import Tag from '@/components/Tag';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <Card
      title={title}
      footer={
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      }
    >
      <p className="text-slate-700 mb-4">
        {description}
      </p>
    </Card>
  );
}