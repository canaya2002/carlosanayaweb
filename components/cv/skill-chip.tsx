import { Badge } from '@/components/ui/badge'
import { Skill } from '@/data/skills'

interface SkillChipProps {
  skill: Skill
}

export function SkillChip({ skill }: SkillChipProps) {
  const variantMap = {
    technical: 'default',
    management: 'secondary',
    soft: 'outline',
  } as const

  return (
    <Badge variant={variantMap[skill.category]} className="px-3 py-1">
      {skill.name}
    </Badge>
  )
}
