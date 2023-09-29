
using System.ComponentModel.DataAnnotations;

namespace NetAPIWithReactJS.Models
{
    public class Person
    {
        [Key]
        [MinLength(3)]
        public string PersonId { get; set;}
        [MinLength(3)]
        public string PersonName { get; set; }
        public string Address { get; set; }
        [Range(0,120)]
        public int Age { get; set; }
    }
}