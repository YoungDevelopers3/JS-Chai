#include <bits/stdc++.h>
using namespace std;
class Node
{
public:
    int data;
    Node *next;

public:
    Node(int data1, Node *next1)
    {
        data = data1;
        next = next1;
    }

public:
    Node(int data1)
    {
        data = data1;
        next = nullptr;
    }
};
Node *arr2ll(vector<int> arr)
{
    Node *header = new Node(arr[0]);
    Node *mover = header;
    for (int i = 1; i < arr.size(); i++)
    {
        Node *temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    }
    return header;
}

Node *InsertingAtTail(Node *header, int val)
{
    if (header == NULL)
    {
        return new Node(val);
    }
    Node *temp = header;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    Node *newval = new Node(val);
    temp->next = newval;
    return header;
}

void printing(Node *header)
{
    while (header != NULL)
    {
        cout << header->data << " ";
        header = header->next;
    }
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    Node *header = arr2ll(arr);
    header = InsertingAtTail(header, 6);
    printing(header);
}