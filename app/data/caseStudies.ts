export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  tagline: string;
  heroTitle: string;
  heroDescription: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "carta-equity-management",
    company: "Carta",
    industry: "Financial Technology",
    tagline: "Streamlining Equity Management",
    heroTitle: "How Carta Reduced Reconciliation Time by 60%",
    heroDescription: "Carta partnered with BeeBee Advisory to automate their equity management bookkeeping, reducing manual reconciliation time and improving accuracy across their cap table operations.",
    stats: [
      { label: "Time Saved", value: "60%" },
      { label: "Accuracy Rate", value: "99.9%" },
      { label: "Monthly Transactions", value: "10K+" },
      { label: "Team Efficiency", value: "3x" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Carta was experiencing significant bottlenecks in their equity management reconciliation process, with manual data entry consuming valuable time and introducing errors.",
      points: [
        "Manual reconciliation taking 40+ hours per month",
        "Inconsistent data across multiple platforms",
        "Difficulty tracking complex equity transactions",
        "Limited real-time visibility into cap table changes",
        "Compliance reporting delays"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented an automated bookkeeping system integrated with Carta's equity management platform, creating seamless data flow and real-time reconciliation.",
      points: [
        "Automated equity transaction recording and categorization",
        "Real-time integration with Carta's cap table platform",
        "Custom reconciliation workflows for complex equity events",
        "Automated compliance reporting and audit trails",
        "Monthly financial review with dedicated senior advisor"
      ]
    },
    results: {
      title: "The Results",
      description: "Within 3 months of implementation, Carta saw dramatic improvements in efficiency, accuracy, and financial visibility.",
      metrics: [
        {
          label: "Reconciliation Time",
          value: "60% Reduction",
          description: "From 40 hours to 16 hours per month"
        },
        {
          label: "Data Accuracy",
          value: "99.9%",
          description: "Near-perfect accuracy in equity transactions"
        },
        {
          label: "Real-time Reporting",
          value: "Same Day",
          description: "Instant visibility into cap table changes"
        },
        {
          label: "Team Productivity",
          value: "3x Increase",
          description: "Finance team focused on strategic initiatives"
        }
      ]
    },
    testimonial: {
      quote: "BeeBee Advisory transformed our equity management accounting. The automation they implemented saved us countless hours and gave us confidence in our financial data.",
      author: "Sarah Chen",
      role: "VP of Finance, Carta"
    }
  },
  {
    slug: "cone-health-financial-transformation",
    company: "Cone Health",
    industry: "Healthcare",
    tagline: "Financial Operations Transformation",
    heroTitle: "Achieving 5-Day Month-End Close for Cone Health",
    heroDescription: "Cone Health partnered with BeeBee Advisory to modernize their financial operations, reducing month-end close time from 15 days to just 5 days while improving cash flow visibility.",
    stats: [
      { label: "Close Time", value: "5 Days" },
      { label: "Cash Visibility", value: "Real-time" },
      { label: "Process Efficiency", value: "67%" },
      { label: "Error Reduction", value: "92%" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Cone Health's legacy financial systems were creating significant delays in month-end closing and limiting their ability to make data-driven decisions.",
      points: [
        "Month-end close taking 15+ days",
        "Manual data consolidation from multiple departments",
        "Limited cash flow forecasting capabilities",
        "Delayed financial reporting to stakeholders",
        "High error rates in manual processes"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive financial transformation including cloud-based accounting, automated workflows, and real-time dashboards.",
      points: [
        "Cloud accounting platform with automated data feeds",
        "Standardized chart of accounts across all departments",
        "Real-time cash flow monitoring and forecasting",
        "Automated reconciliation and variance analysis",
        "Executive dashboard with key financial metrics"
      ]
    },
    results: {
      title: "The Results",
      description: "Cone Health achieved remarkable improvements in financial operations efficiency and decision-making capabilities.",
      metrics: [
        {
          label: "Month-End Close",
          value: "5 Days",
          description: "Reduced from 15 days to 5 days"
        },
        {
          label: "Error Rate",
          value: "92% Lower",
          description: "Dramatic reduction in manual errors"
        },
        {
          label: "Cash Visibility",
          value: "Real-time",
          description: "Daily cash position updates"
        },
        {
          label: "Process Time",
          value: "67% Faster",
          description: "Overall financial operations efficiency"
        }
      ]
    },
    testimonial: {
      quote: "The transformation BeeBee Advisory delivered exceeded our expectations. We now have real-time visibility into our financials and can make faster, more informed decisions.",
      author: "Michael Rodriguez",
      role: "CFO, Cone Health"
    }
  },
  {
    slug: "gusto-payroll-optimization",
    company: "Gusto",
    industry: "HR Technology",
    tagline: "Payroll Processing Excellence",
    heroTitle: "Reducing Payroll Errors by 85% for Gusto",
    heroDescription: "Gusto partnered with BeeBee Advisory to optimize their payroll processing for 500+ employees, dramatically reducing errors and saving 20 hours per pay cycle.",
    stats: [
      { label: "Error Reduction", value: "85%" },
      { label: "Time Saved", value: "20 hrs" },
      { label: "Employees", value: "500+" },
      { label: "Compliance", value: "100%" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Gusto's rapid growth created payroll complexity that their existing processes couldn't handle efficiently, leading to errors and compliance concerns.",
      points: [
        "Manual payroll processing for 500+ employees",
        "High error rates in deductions and benefits",
        "Compliance challenges across multiple states",
        "Time-consuming payroll reconciliation",
        "Limited integration with accounting systems"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented an automated payroll system with full integration to accounting, ensuring accuracy and compliance across all jurisdictions.",
      points: [
        "Automated payroll processing with built-in validations",
        "Multi-state tax compliance and filing",
        "Benefits administration and deduction tracking",
        "Real-time integration with accounting platform",
        "Automated year-end W-2 and 1099 processing"
      ]
    },
    results: {
      title: "The Results",
      description: "Gusto achieved exceptional improvements in payroll accuracy, efficiency, and compliance.",
      metrics: [
        {
          label: "Error Reduction",
          value: "85%",
          description: "Dramatic decrease in payroll errors"
        },
        {
          label: "Time Savings",
          value: "20 Hours",
          description: "Per pay cycle efficiency gain"
        },
        {
          label: "Compliance Rate",
          value: "100%",
          description: "Perfect compliance across all states"
        },
        {
          label: "Employee Satisfaction",
          value: "95%",
          description: "Improved payroll accuracy rating"
        }
      ]
    },
    testimonial: {
      quote: "BeeBee Advisory's payroll solution transformed our operations. We went from constant firefighting to smooth, error-free payroll processing.",
      author: "Jennifer Park",
      role: "Head of People Operations, Gusto"
    }
  },
  {
    slug: "receipt-bank-automation",
    company: "Receipt Bank",
    industry: "Financial Services",
    tagline: "Expense Automation Success",
    heroTitle: "Automating Expense Tracking for Receipt Bank",
    heroDescription: "Receipt Bank partnered with BeeBee Advisory to automate their expense tracking and reduce manual data entry by 90%, saving 15 hours weekly.",
    stats: [
      { label: "Automation", value: "90%" },
      { label: "Weekly Savings", value: "15 hrs" },
      { label: "Accuracy", value: "99.5%" },
      { label: "Processing Speed", value: "5x" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Receipt Bank was spending excessive time on manual expense data entry and reconciliation, limiting their ability to scale operations.",
      points: [
        "Manual entry of 1000+ receipts monthly",
        "Inconsistent expense categorization",
        "Delayed expense reimbursements",
        "Difficulty tracking vendor payments",
        "Limited spend analytics and reporting"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented an automated expense tracking system with OCR technology and intelligent categorization, integrated with their accounting platform.",
      points: [
        "Automated receipt capture and data extraction",
        "AI-powered expense categorization",
        "Automated approval workflows",
        "Real-time expense reporting and analytics",
        "Seamless integration with accounting system"
      ]
    },
    results: {
      title: "The Results",
      description: "Receipt Bank achieved remarkable efficiency gains and improved financial visibility through automation.",
      metrics: [
        {
          label: "Manual Entry",
          value: "90% Reduction",
          description: "Automated data extraction from receipts"
        },
        {
          label: "Time Savings",
          value: "15 Hours/Week",
          description: "Finance team productivity gain"
        },
        {
          label: "Processing Speed",
          value: "5x Faster",
          description: "Expense approval and reimbursement"
        },
        {
          label: "Data Accuracy",
          value: "99.5%",
          description: "Improved expense categorization"
        }
      ]
    },
    testimonial: {
      quote: "The automation BeeBee Advisory implemented freed up our team to focus on strategic work instead of data entry. It's been a game-changer.",
      author: "David Thompson",
      role: "Finance Director, Receipt Bank"
    }
  },
  {
    slug: "xero-cloud-accounting",
    company: "Xero",
    industry: "Accounting Software",
    tagline: "Cloud Accounting Infrastructure",
    heroTitle: "Implementing Cloud Accounting for Xero",
    heroDescription: "Xero partnered with BeeBee Advisory to implement cloud accounting infrastructure, enabling real-time reporting and reducing closing time from 10 to 3 days.",
    stats: [
      { label: "Close Time", value: "3 Days" },
      { label: "Real-time Data", value: "24/7" },
      { label: "Efficiency Gain", value: "70%" },
      { label: "User Adoption", value: "98%" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Xero needed to modernize their own internal accounting infrastructure to match the cloud-first approach they advocated for their customers.",
      points: [
        "Legacy on-premise accounting systems",
        "10-day month-end close process",
        "Limited real-time financial visibility",
        "Difficulty collaborating across global teams",
        "Manual consolidation of multi-entity financials"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive cloud accounting infrastructure with real-time consolidation and automated reporting across all entities.",
      points: [
        "Cloud-based accounting platform deployment",
        "Automated multi-entity consolidation",
        "Real-time financial dashboards and reporting",
        "Standardized processes across global offices",
        "Automated bank reconciliation and cash management"
      ]
    },
    results: {
      title: "The Results",
      description: "Xero achieved significant improvements in financial operations efficiency and real-time visibility.",
      metrics: [
        {
          label: "Month-End Close",
          value: "3 Days",
          description: "Reduced from 10 days to 3 days"
        },
        {
          label: "Real-time Access",
          value: "24/7",
          description: "Continuous financial data availability"
        },
        {
          label: "Efficiency",
          value: "70% Gain",
          description: "Overall process improvement"
        },
        {
          label: "User Adoption",
          value: "98%",
          description: "Team embraced new platform"
        }
      ]
    },
    testimonial: {
      quote: "BeeBee Advisory helped us practice what we preach. Our cloud accounting infrastructure now sets the standard for our industry.",
      author: "Emma Watson",
      role: "Global Controller, Xero"
    }
  },
  {
    slug: "bill-ap-automation",
    company: "Bill.com",
    industry: "Financial Technology",
    tagline: "AP/AR Workflow Automation",
    heroTitle: "Automating AP/AR for Bill.com",
    heroDescription: "Bill.com partnered with BeeBee Advisory to automate AP/AR workflows, processing 1000+ invoices monthly and improving payment accuracy to 99.8%.",
    stats: [
      { label: "Invoices/Month", value: "1000+" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Processing Time", value: "75%" },
      { label: "Cash Flow", value: "+30%" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Bill.com was experiencing bottlenecks in their AP/AR processes, with manual workflows creating delays and errors in vendor payments and customer collections.",
      points: [
        "Manual processing of 1000+ invoices monthly",
        "Delayed vendor payments affecting relationships",
        "Inconsistent AR collection processes",
        "Limited cash flow forecasting",
        "High error rates in payment processing"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented automated AP/AR workflows with intelligent routing, approval automation, and integrated payment processing.",
      points: [
        "Automated invoice capture and routing",
        "Multi-level approval workflows",
        "Automated payment scheduling and processing",
        "AR automation with payment reminders",
        "Real-time cash flow forecasting and reporting"
      ]
    },
    results: {
      title: "The Results",
      description: "Bill.com achieved exceptional improvements in AP/AR efficiency, accuracy, and cash flow management.",
      metrics: [
        {
          label: "Processing Speed",
          value: "75% Faster",
          description: "Invoice to payment cycle time"
        },
        {
          label: "Payment Accuracy",
          value: "99.8%",
          description: "Near-perfect payment processing"
        },
        {
          label: "Cash Flow",
          value: "30% Improvement",
          description: "Better working capital management"
        },
        {
          label: "Vendor Satisfaction",
          value: "95%",
          description: "On-time payment rating"
        }
      ]
    },
    testimonial: {
      quote: "BeeBee Advisory's AP/AR automation transformed our financial operations. We now process more invoices with fewer errors and better cash flow visibility.",
      author: "Robert Martinez",
      role: "VP of Finance, Bill.com"
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(cs => cs.slug);
}
