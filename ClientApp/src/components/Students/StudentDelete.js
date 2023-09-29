function StudentDelete({stdID, fName, dc})
{
    return ( 
        <div>
            <div class="modal" id="deleteStudent">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Student</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <label>Student id: {stdID}</label><br></br>
                                <label>Full name: {fName}</label><br></br>
                                <label>Address: {dc}</label><br></br>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentDelete;