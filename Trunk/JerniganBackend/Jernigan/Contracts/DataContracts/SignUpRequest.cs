﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class SignUpRequest
    {
        [DataMember]
        public string Username { get; set; }

        [DataMember]
        public string AboutMe { get; set; }

        [DataMember]
        public string CityOfResidence { get; set; }

        [DataMember]
        public int Photo { get; set; }

        [DataMember]
        public string Password { get; set; }

        [DataMember]
        public string ConfirmPassword { get; set; }
    }
}
