import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    icon: 'traffic-light';
    name: 'feature';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFocusArea extends Struct.ComponentSchema {
  collectionName: 'components_elements_focus_areas';
  info: {
    description: '';
    displayName: 'Focus Area';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    displayOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHighlight extends Struct.ComponentSchema {
  collectionName: 'components_elements_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'lightbulb';
  };
  attributes: {
    isEmphasized: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIdealForItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_ideal_for_items';
  info: {
    description: '';
    displayName: 'Ideal For Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    displayOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    name: 'plan';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
    isRecommended: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
  };
}

export interface ElementsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_steps';
  info: {
    description: '';
    displayName: 'Process Step';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_features';
  info: {
    description: '';
    displayName: 'Service Feature';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    displayOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'user-check';
    name: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    picture: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'caret-square-down';
    name: 'Footer';
  };
  attributes: {
    columns: Schema.Attribute.Component<'elements.footer-section', true>;
    logo: Schema.Attribute.Media<'images'>;
    smallText: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'links.button-link', false>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    menu: Schema.Attribute.Component<'elements.footer-section', true>;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subMenuItems: Schema.Attribute.Component<'links.sub-menu-items', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksSubMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_links_sub_menu_items';
  info: {
    displayName: 'subMenuItems';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SchemaFaqSchema extends Struct.ComponentSchema {
  collectionName: 'components_schema_faq_schemas';
  info: {
    displayName: 'faq-schema';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    mainEntityName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_slices_bottom_actions';
  info: {
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images'>;
    smallTextWithLink: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIndustryOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_industry_overviews';
  info: {
    description: '';
    displayName: 'Industry Overview';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    highlights: Schema.Attribute.Component<'elements.highlight', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLargeVideo extends Struct.ComponentSchema {
  collectionName: 'components_slices_large_videos';
  info: {
    displayName: 'Large video';
    icon: 'play-circle';
    name: 'LargeVideo';
  };
  attributes: {
    description: Schema.Attribute.String;
    poster: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    emailPlaceholder: Schema.Attribute.String;
    location: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
    name: 'Pricing';
  };
  attributes: {
    plans: Schema.Attribute.Component<'elements.plan', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    displayName: 'Testimonials group';
    icon: 'user-friends';
    name: 'TestimonialsGroup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    logos: Schema.Attribute.Component<'elements.logos', true>;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.feature': ElementsFeature;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.focus-area': ElementsFocusArea;
      'elements.footer-section': ElementsFooterSection;
      'elements.highlight': ElementsHighlight;
      'elements.ideal-for-item': ElementsIdealForItem;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.process-step': ElementsProcessStep;
      'elements.service-feature': ElementsServiceFeature;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.sub-menu-items': LinksSubMenuItems;
      'meta.metadata': MetaMetadata;
      'schema.faq-schema': SchemaFaqSchema;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.hero': SectionsHero;
      'sections.industry-overview': SectionsIndustryOverview;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.pricing': SectionsPricing;
      'sections.rich-text': SectionsRichText;
      'sections.testimonials-group': SectionsTestimonialsGroup;
    }
  }
}
