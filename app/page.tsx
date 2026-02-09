import { Hero } from '@/components/sections/hero'
import { AboutPreview } from '@/components/sections/about-preview'
import { BlogPreview } from '@/components/sections/blog-preview'
import { ProjectsPreview } from '@/components/sections/projects-preview'
import { Services } from '@/components/sections/services'
import { Newsletter } from '@/components/sections/newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <BlogPreview />
      <Services />
      <Newsletter />
    </>
  )
}
