/**
 * TypeScript types for Yogapit news system
 */

export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO 8601 format (YYYY-MM-DD)
  category: string;
  author?: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface NewsFilters {
  category: string | null;
  searchQuery: string;
}

export interface NewsPagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface NewsGridProps {
  items: NewsItem[];
  isLoading?: boolean;
}

export interface NewsCardProps {
  item: NewsItem;
}

export interface FiltersBarProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
