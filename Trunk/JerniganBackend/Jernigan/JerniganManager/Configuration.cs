using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Shared;
using System.Configuration;

namespace CaerusSoft.Jernigan.JerniganManager
{
    internal static class Configuration
    {
        public static RuntimeMode GetRuntimeMode()
        {
            RuntimeMode runtimeMode = RuntimeMode.REALIMPL;
            string runtimeModeString = ConfigurationManager.AppSettings["JerniganManager_RuntimeMode"];
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
