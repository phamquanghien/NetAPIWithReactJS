
using System.ComponentModel.DataAnnotations;

namespace NetAPIWithReactJS.Models
{
    public class Person
    {
        [Key]
        public string PersonID { get; set;}
        public string FullName { get; set; }
    }
}