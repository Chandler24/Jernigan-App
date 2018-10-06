using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class SignUpResponse
    {
        [DataMember]
        public bool SignUpSuccessful { get; set; }

        [DataMember]
        public string ErrorMessage { get; set; }
    }
}
