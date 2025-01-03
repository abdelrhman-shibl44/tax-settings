export type BaseLink = {
  id?: string;
  label: string;
  icon?: string;
  img?: string;
  alt?: string;
  new?: string;
  href?: string;
};

export interface RegularLink extends BaseLink {
  icon: string;
}

export type NestedLinkSection = {
  id?: string;
  title: string;
  nestedLinks: BaseLink[];
};

export type TSidebarLink = RegularLink | NestedLinkSection;
