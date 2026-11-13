export interface ProductModule {
  id: string;
  name: string;
  summary: string;
  capabilities: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  image: string;
  imageAlt: string;
  keyFeatures: string[];
  modules: ProductModule[];
  deploymentOptions: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'businessi-erp',
    slug: 'businessi-erp',
    name: 'Businessi ERP',
    category: 'Enterprise Cloud ERP',
    tagline: 'Unified Operations, Financial Clarity, and Multi-Branch Control.',
    description:
      'A cloud-based ERP solution designed to simplify business operations, organize data, and improve business management.',
    extendedDescription:
      'Businessi ERP brings accounting, inventory control, procurement, sales billing, and workforce management into a single cloud-hosted platform. Built by Adhoc Softwares for growing enterprises, it replaces fragmented spreadsheets with role-governed workflows and real-time operational visibility.',
    image: '/src/assets/images/product_businessi_erp_1794560268404.jpg',
    imageAlt: 'Businessi ERP cloud financial ledger and inventory management dashboard on a desktop display',
    keyFeatures: [
      'Centralized financial ledgers, invoicing, and tax reporting',
      'Real-time multi-warehouse stock tracking and reorder alerts',
      'Procurement, supplier ledger, and purchase approval workflows',
      'Role-based access permissions and branch-level analytics',
    ],
    modules: [
      {
        id: 'finance',
        name: 'Finance & Accounting',
        summary: 'Automated general ledger, accounts payable/receivable, GST-ready invoicing, and balance sheet reporting.',
        capabilities: [
          'Multi-branch ledger consolidation',
          'Automated invoice generation & payment tracking',
          'Expense categorization & audit logs',
        ],
      },
      {
        id: 'inventory',
        name: 'Inventory & Supply Chain',
        summary: 'Live stock levels across warehouses, batch tracking, purchase requisitions, and vendor management.',
        capabilities: [
          'SKU & batch-level inventory visibility',
          'Purchase order & GRN reconciliation',
          'Inter-branch stock transfer tracking',
        ],
      },
      {
        id: 'hr',
        name: 'HR & Payroll',
        summary: 'Employee directory, attendance tracking, leave approvals, and structured monthly payroll processing.',
        capabilities: [
          'Department & shift scheduling',
          'Leave & attendance integration',
          'Automated payslip generation',
        ],
      },
      {
        id: 'analytics',
        name: 'Management Reporting',
        summary: 'Role-specific operational summaries giving leadership clear visibility into margins, cash flow, and fulfillment.',
        capabilities: [
          'Branch-wise revenue & expense comparison',
          'Exportable audit and tax summaries',
          'Custom KPI views by department',
        ],
      },
    ],
    deploymentOptions: ['Managed Cloud Hosting', 'Dedicated Enterprise Instance', 'Custom API Integrations'],
  },
  {
    id: 'queue-bot',
    slug: 'queue-bot',
    name: 'Queue Bot',
    category: 'Conversational AI Platform',
    tagline: 'Intelligent Customer Interactions and Automated Support Workflows.',
    description:
      'An AI chatbot solution designed to improve customer interactions and automate customer support.',
    extendedDescription:
      'Queue Bot enables businesses to respond to customer questions instantly across web and mobile touchpoints while automatically routing complex requests to the right support specialist. Designed with structured conversation flows and natural language understanding, it reduces repetitive ticket load without losing the human touch.',
    image: '/src/assets/images/product_queue_bot_1794560268003.jpg',
    imageAlt: 'Queue Bot AI customer support automation interface displayed on a laptop and smartphone',
    keyFeatures: [
      '24/7 automated customer inquiry resolution and FAQ handling',
      'Intent-based ticket triage and smart department routing',
      'Seamless handoff to live support agents with full context',
      'Multi-channel web widget and mobile messaging integration',
    ],
    modules: [
      {
        id: 'triage',
        name: 'Automated Inquiry Triage',
        summary: 'Understands customer intent, answers routine questions immediately, and collects structured details before escalation.',
        capabilities: [
          'Natural-language intent classification',
          'Guided self-service order & status lookups',
          'Structured pre-chat data capture',
        ],
      },
      {
        id: 'routing',
        name: 'Smart Queue Routing',
        summary: 'Assigns complex conversations to specialized teams based on topic, language, or priority rules.',
        capabilities: [
          'Department-based queue assignment',
          'Working-hours & SLA fallback handling',
          'Full transcript context on agent handoff',
        ],
      },
      {
        id: 'knowledge',
        name: 'Knowledge Base Sync',
        summary: 'Grounds automated responses in your verified product manuals, policies, and help center articles.',
        capabilities: [
          'Structured FAQ & policy indexing',
          'Instant response updates when policies change',
          'Fallback to human support on low confidence',
        ],
      },
      {
        id: 'channels',
        name: 'Omnichannel Deployment',
        summary: 'Embeds cleanly into web portals, e-commerce checkouts, and mobile applications via lightweight SDKs.',
        capabilities: [
          'Customizable web chat widget',
          'Webhook & CRM ticket synchronization',
          'Conversation volume & resolution analytics',
        ],
      },
    ],
    deploymentOptions: ['Web Widget Embed', 'Mobile App SDK', 'Custom CRM / ERP Connector'],
  },
];
