using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class SignInResponse
    {
        [DataMember]
        public bool SignInSuccessful { get; set; }

        [DataMember]
        public string ErrorMessage { get; set; }

        [DataMember]
        public int UserId { get; set; }
    }
}
