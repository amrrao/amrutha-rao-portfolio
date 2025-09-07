"use client";

import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarFileTreeProps {
  scrollToSection: (sectionId: string) => void;
  currentSection?: string;
}

export function SidebarFileTree({ scrollToSection, currentSection }: SidebarFileTreeProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleFileClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-background border border-border rounded-md p-2 hover:bg-accent transition-colors"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-background border-r border-border transition-all duration-300 z-40 ${
        isCollapsed ? 'w-12' : 'w-64'
      } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <h2 className="text-sm font-semibold text-foreground">EXPLORER</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-accent rounded transition-colors"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

      {/* File Tree */}
      <div className="h-[calc(100vh-4rem)] overflow-hidden">
        <Tree
          className="overflow-hidden bg-background p-2"
          initialSelectedId={currentSection || "3"}
          initialExpandedItems={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          elements={PORTFOLIO_ELEMENTS}
        >
          <Folder element="portfolio" value="1">
            <Folder value="2" element="sections">
              <File value="3" onClick={() => handleFileClick("home")}>
                {!isCollapsed && <span>home.tsx</span>}
              </File>
              <File value="4" onClick={() => handleFileClick("about")}>
                {!isCollapsed && <span>about.tsx</span>}
              </File>
              <File value="5" onClick={() => handleFileClick("projects")}>
                {!isCollapsed && <span>projects.tsx</span>}
              </File>
              <File value="6" onClick={() => handleFileClick("skills")}>
                {!isCollapsed && <span>skills.tsx</span>}
              </File>
              <File value="7" onClick={() => handleFileClick("experience")}>
                {!isCollapsed && <span>experience.tsx</span>}
              </File>
              <File value="8" onClick={() => handleFileClick("contact")}>
                {!isCollapsed && <span>contact.tsx</span>}
              </File>
            </Folder>
            <Folder value="9" element="assets">
              <File value="10" onClick={() => window.open('/resume.pdf', '_blank')}>
                {!isCollapsed && <span>resume.pdf</span>}
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

const PORTFOLIO_ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "portfolio",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "sections",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "home.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "about.tsx",
          },
          {
            id: "5",
            isSelectable: true,
            name: "projects.tsx",
          },
          {
            id: "6",
            isSelectable: true,
            name: "skills.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "experience.tsx",
          },
          {
            id: "8",
            isSelectable: true,
            name: "contact.tsx",
          },
        ],
      },
      {
        id: "9",
        isSelectable: true,
        name: "assets",
        children: [
          {
            id: "10",
            isSelectable: true,
            name: "resume.pdf",
          },
        ],
      },
    ],
  },
];
