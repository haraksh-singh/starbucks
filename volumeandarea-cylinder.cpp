#include<iostream>
using namespace std;

class dimension {
public:
float radius;
float pi=3.14;
float height;
float Area;
float Volume;
void input() {
cout << "enter radius: ";
cin >> radius;
cout <<"enter height: ";
cin >> height;
}
};
class value:public dimension{
public:
float area(float radius,float height) {
Area=((2*(pi*radius*height))+(2*(pi*radius*radius)));
return Area;
}

float volume(float radius,float height){
Volume=((pi*radius)*(radius*height));
return Volume;
}

};




int main() {
value obj;
obj.input();
cout << "area of cylinder: " << obj.area(obj.radius,obj.height) << endl;
cout << "volume of cylinder: " << obj.volume(obj.radius,obj.height) << endl;
}
