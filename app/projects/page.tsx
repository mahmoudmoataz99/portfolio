import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'All Projects',
  description: 'A complete collection of my development work and case studies.',
}

export default function AllProjectsPage() {
  return <ProjectsClient />
}