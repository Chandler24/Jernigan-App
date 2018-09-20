using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Shared;
using CaerusSoft.Jernigan.JerniganManager;
using CaerusSoft.Jernigan.JerniganResourceAccess;
using CaerusSoft.Jernigan.AccountManager;
using CaerusSoft.Jernigan.AccountResourceAccess;
using System.ServiceModel;

namespace ConsoleHost
{
    class Program
    {
        static void Main(string[] args)
        {
            List<ServiceHost> hosts = new List<ServiceHost>();
            try
            {
                // Start the services
                Type[] hostTypes = new Type[]
                {
                    typeof(JerniganManager),
                    typeof(JerniganManager_Emulator),
                    typeof(JerniganManager_RealImpl),
                    typeof(JerniganResourceAccess),
                    typeof(JerniganResourceAccess_Emulator),
                    typeof(JerniganResourceAccess_RealImpl),
                    typeof(AccountManager),
                    typeof(AccountManager_Emulator),
                    typeof(AccountManager_RealImpl),
                    typeof(AccountResourceAccess),
                    typeof(AccountResourceAccess_Emulator),
                    typeof(AccountResourceAccess_RealImpl)
                };

                foreach(Type hostType in hostTypes)
                {
                    Console.Write(hostType.Name + " starting...");
                    JerniganServiceHost host = new JerniganServiceHost(hostType);
                    host.Open();
                    Console.WriteLine("started.");
                    hosts.Add(host);
                }
            }
            catch (Exception ex)
            {
                throw;
            }

            // End the service
            Console.WriteLine();
            Console.WriteLine("Press <ENTER> to terminate the services");
            Console.WriteLine();
            Console.ReadLine();

            try
            {
                foreach(ServiceHost host in hosts)
                {
                    if (host.State == CommunicationState.Opened)
                        host.Close();
                    else
                        host.Abort();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
