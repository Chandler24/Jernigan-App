using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Proxies;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.Shared
{
    public static class JerniganObjectFactory
    {
        public static IJerniganManager_Emulator GetJerniganEmulatorProxy()
        {
            return new JerniganManager_EmulatorProxy();
        }

        public static IJerniganManager_RealImpl GetJerniganManagerRealImplProxy()
        {
            return new JerniganManager_RealImplProxy();
        }
    }
}
