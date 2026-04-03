import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'All Projects',
  description: 'Complete portfolio of digital operations.',
}

export default function AllProjectsPage() {
  return <ProjectsClient />
}
