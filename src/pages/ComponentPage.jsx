import Header from "../components/Header";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import Toastr from "../components/shared/Toastr";
import TodoItem from "../components/TodoItem";

function ComponentPage() {
    const mockItem = {
        status: 1,
        text: 'This is some custom text for this component',
        date: '01-01-2000'
    }
    return (
        <>
            <Card>
                <div className="about">
                    <h1>Components used in this project</h1>
                    <Header text="Header component" />
                    <Button type='submit' version='primary' isDisabled={false}>
                        Button Primary
                    </Button>
                    <Button type='submit' version='secondary' isDisabled={true}>
                        Button Secondary & disabled
                    </Button>
                    <Toastr display={true} status={'success'}/>
                    <Toastr display={true} status={'error'}/>
                </div>
            </Card>
            <TodoItem item={mockItem} />
        </>
    )
}

export default ComponentPage