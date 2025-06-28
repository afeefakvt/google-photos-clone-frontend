export interface FeaturedItem {
  title: string
  subtitle?: string
  image: string
  type: string
}

export interface PhotoDay {
  date: string
  photos: string[]
}

export interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}