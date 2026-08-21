import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'THE COMPLETE LEDGER',
  description: 'Every job, every deal. The complete record of work.',
}

export default function AllProjectsPage() {
  return <ProjectsClient />
}