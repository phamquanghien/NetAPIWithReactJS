
using System.ComponentModel.DataAnnotations;

namespace NetAPIWithReactJS.Models
{
    public class Person
    {
        [Key]
        public string PersonId { get; set;}
        public string PersonName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
    }
}