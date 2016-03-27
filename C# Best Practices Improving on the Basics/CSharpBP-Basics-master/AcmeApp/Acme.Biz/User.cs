using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Acme.Biz
{
    /// <summary>
    /// Singleton -- Provides only one instance
    /// </summary>
    public class User
    {
        //Private constructor(s)
        private User()
        {

        }

        private static User instance;
        //Static property provides the one instance
        //Instance accessed with User.Instance
        public static User Instance
        {
            get {
                if (instance == null)
                {
                    instance = new User();
                }
                return instance;
            }
        }

    }
}
