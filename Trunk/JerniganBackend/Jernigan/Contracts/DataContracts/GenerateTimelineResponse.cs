using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class GenerateTimelineResponse
    {
        [DataMember]
        public string Timeline { get; set; }
    }
}
