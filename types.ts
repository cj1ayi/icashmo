export type ViewState = 'LANDING' | 'INVESTOR' | 'SME' | 'ADMIN';

export interface CheckListing {
  id: string;
  companyName: string;
  companyInitials: string;
  companyColor: string; // e.g., 'bg-indigo-100 text-primary'
  industry: string;
  risk: 'Low Risk' | 'Med Risk' | 'High Risk';
  riskColor: string; // e.g., 'text-emerald-500'
  amount: number;
  askingPrice: number;
  maturityDays: number;
  maturityDate: string;
  netReturn: number;
  returnPct: number;
  status: 'ACTIVE' | 'PENDING' | 'LOCKED';
}

export interface AdminApproval {
  id: string;
  checkId: string;
  companyName: string;
  companyVerified: boolean;
  checkType: 'PDC';
  dueDate: string;
  amount: number;
  submittedTime: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}
