export interface PResponseType {
  status: PResponseStatus;
  total?: number;
  data: any;
}

interface PResponseStatus {
  code: number;
  message?: string;
}
