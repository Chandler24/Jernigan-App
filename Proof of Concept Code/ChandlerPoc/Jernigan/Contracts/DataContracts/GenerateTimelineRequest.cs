using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class GenerateTimelineRequest
    {
        [DataMember]
        public string LocationName { get; set; }

        [DataMember]
        public string LocationAddress { get; set; }
    }
}
