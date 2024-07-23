export interface CompanyType {
  [key: string]: {
    catchPhrase: string;
    bs: string;
  };
}

const companyData: CompanyType = {
  "Romaguera Crona": {
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  },
  "Deckow Crist": {
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains"
  },
  "Robel Corkery": {
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services"
  },
  "Keebler LLC": {
    catchPhrase: "User-centric fault-tolerant solution",
    bs: "revolutionize end-to-end systems"
  },
  "Johns Group": {
    catchPhrase: "Configurable multimedia task-force",
    bs: "generate enterprise e-tailers"
  }
};

export default companyData;
