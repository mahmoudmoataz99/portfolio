import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'THE COMPLETE COLLECTION',
  description: 'Every mission, every adventure. The complete Web-Dev collection.',
}

export default function AllProjectsPage() {
  return <ProjectsClient />
}