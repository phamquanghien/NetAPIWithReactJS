using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NetAPIWithReactJS.Migrations
{
    /// <inheritdoc />
    public partial class Alter_Person : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Person");

            migrationBuilder.DropColumn(
                name: "Age",
                table: "Person");

            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "Person",
                newName: "PersonID");

            migrationBuilder.RenameColumn(
                name: "PersonName",
                table: "Person",
                newName: "FullName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PersonID",
                table: "Person",
                newName: "PersonId");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Person",
                newName: "PersonName");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Person",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Person",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
