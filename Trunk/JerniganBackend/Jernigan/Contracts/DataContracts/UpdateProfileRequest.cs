using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class UpdateProfileRequest
    {
        [DataMember]
        public int UserId { get; set; }

        [DataMember]
        public string Bio { get; set; }

        [DataMember]
        public string CityOfResidence { get; set; }

        [DataMember]
        public string Picture { get; set; }
    }
}
