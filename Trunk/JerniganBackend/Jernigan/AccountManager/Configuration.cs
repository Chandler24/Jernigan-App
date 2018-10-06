using CaerusSoft.Jernigan.Shared;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.AccountManager
{
    internal static class Configuration
    {
        public static RuntimeMode GetRuntimeMode()
        {
            RuntimeMode runtimeMode = RuntimeMode.REALIMPL;
            string runtimeModeString = ConfigurationManager.AppSettings["AccountManager_RuntimeMode"];
            if (!string.IsNullOrEmpty(runtimeModeString))
            {
                switch (runtimeModeString.ToUpper())
                {
                    case "EMULATOR":
                        runtimeMode = RuntimeMode.EMULATOR;
                        break;
                    case "SIMULATOR":
                        runtimeMode = RuntimeMode.SIMULATOR;
                        break;
                    case "REALIMPL":
                        runtimeMode = RuntimeMode.REALIMPL;
                        break;
                    default:
                        runtimeMode = RuntimeMode.REALIMPL;
                        break;
                }
            }
            return runtimeMode;
        }
    }
}
