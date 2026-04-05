export interface DesktopSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}